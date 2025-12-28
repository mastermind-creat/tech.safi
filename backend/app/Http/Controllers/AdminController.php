<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $admins = User::where('role', 'admin')->orderBy('created_at', 'desc')->get();
        return response()->json($admins);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $admin = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => 'admin',
        ]);

        return response()->json([
            'message' => 'Admin created successfully',
            'user' => $admin
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $admin = User::where('role', 'admin')->findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($admin->id)],
            'password' => 'nullable|string|min:8',
        ]);

        $admin->name = $validated['name'];
        $admin->email = $validated['email'];
        if (isset($validated['password'])) {
            $admin->password = Hash::make($validated['password']);
        }
        $admin->save();

        return response()->json([
            'message' => 'Admin updated successfully',
            'user' => $admin
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $admin = User::where('role', 'admin')->findOrFail($id);
        
        // Prevent deleting self (simple check, ideally check auth user id)
        // if (auth()->id() == $admin->id) { ... }

        $admin->delete();

        return response()->json([
            'message' => 'Admin deleted successfully'
        ]);
    }

    /**
     * Toggle status.
     */
    public function toggleStatus(string $id)
    {
        $admin = User::where('role', 'admin')->findOrFail($id);
        $admin->is_active = !$admin->is_active;
        $admin->save();

        return response()->json([
            'message' => 'Admin status updated successfully',
            'user' => $admin
        ]);
    }
    /**
     * Authenticate admin.
     */
    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $admin = User::where('email', $validated['email'])
                    ->where('role', 'admin')
                    ->first();

        if (!$admin || !Hash::check($validated['password'], $admin->password)) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        if (!$admin->is_active) {
            return response()->json([
                'message' => 'Account suspended'
            ], 403);
        }

        return response()->json([
            'message' => 'Login successful',
            'user' => $admin
        ]);
    }
}
