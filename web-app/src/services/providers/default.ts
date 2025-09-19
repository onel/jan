/**
 * Default Providers Service - Generic implementation with minimal returns
 */

import type { ProvidersService } from './types'

/**
 * Default implementation of ProvidersService that provides minimal functionality.
 * Returns empty results for most operations and logs method calls for debugging.
 */
export class DefaultProvidersService implements ProvidersService {
  /**
   * Retrieves the list of available model providers.
   * @returns Promise that resolves to an empty array of ModelProvider objects
   */
  async getProviders(): Promise<ModelProvider[]> {
    return []
  }

  /**
   * Fetches available models from a specific provider.
   * @param provider - The model provider to fetch models from
   * @returns Promise that resolves to an empty array of model names
   */
  async fetchModelsFromProvider(provider: ModelProvider): Promise<string[]> {
    console.log('fetchModelsFromProvider called with provider:', provider)
    return []
  }

  /**
   * Updates settings for a specific provider.
   * @param providerName - The name of the provider to update settings for
   * @param settings - Array of provider settings to apply
   * @returns Promise that resolves when the operation completes (no-op in default implementation)
   */
  async updateSettings(providerName: string, settings: ProviderSetting[]): Promise<void> {
    console.log('updateSettings called:', { providerName, settings })
    // No-op - not implemented in default service
  }

  /**
   * Returns the global fetch function for making HTTP requests.
   * @returns The native fetch function
   */
  fetch(): typeof fetch {
    return fetch
  }
}