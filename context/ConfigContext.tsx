
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchGlobalLayoutConfig, GlobalLayoutConfig } from '../dashboard/services/api';

interface ConfigContextType {
  config: GlobalLayoutConfig | null;
  isLoading: boolean;
  refreshConfig: () => Promise<void>;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<GlobalLayoutConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshConfig = async () => {
    setIsLoading(true);
    try {
      const data = await fetchGlobalLayoutConfig();
      setConfig(data);
    } catch (error) {
      console.error("Failed to load global config:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshConfig();
  }, []);

  return (
    <ConfigContext.Provider value={{ config, isLoading, refreshConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
