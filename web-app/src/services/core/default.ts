/**
 * Default Core Service - Generic implementation with minimal returns
 */

import type { ExtensionManifest } from '@/lib/extension'
import type { CoreService, InvokeArgs } from './types'

export class DefaultCoreService implements CoreService {
  /**
   * Invokes a command with optional arguments
   * @template T - The expected return type
   * @param {string} command - The command to invoke
   * @param {InvokeArgs} [args] - Optional arguments for the command
   * @returns {Promise<T>} Promise that rejects with an error since this is not implemented
   * @throws {Error} Always throws "Core invoke not implemented" error
   */
  async invoke<T = unknown>(command: string, args?: InvokeArgs): Promise<T> {
    console.log('Core invoke called:', { command, args })
    throw new Error('Core invoke not implemented')
  }

  /**
   * Converts a file path to a source URL
   * @param {string} filePath - The file path to convert
   * @param {string} [protocol] - Optional protocol to use
   * @returns {string} The original file path unchanged in this default implementation
   */
  convertFileSrc(filePath: string, protocol?: string): string {
    console.log('convertFileSrc called:', { filePath, protocol })
    return filePath
  }

  /**
   * Retrieves the list of currently active extensions
   * @returns {Promise<ExtensionManifest[]>} Promise that resolves to an empty array
   */
  async getActiveExtensions(): Promise<ExtensionManifest[]> {
    return []
  }

  /**
   * Installs extensions (no-op in default implementation)
   * @returns {Promise<void>} Promise that resolves immediately
   */
  async installExtensions(): Promise<void> {
    // No-op
  }

  /**
   * Installs specific extensions
   * @param {ExtensionManifest[]} extensions - Array of extension manifests to install
   * @returns {Promise<ExtensionManifest[]>} Promise that resolves to the same extensions array unchanged
   */
  async installExtension(extensions: ExtensionManifest[]): Promise<ExtensionManifest[]> {
    // No-op in default implementation
    return extensions
  }

  /**
   * Uninstalls extensions by their identifiers
   * @param {string[]} extensions - Array of extension identifiers to uninstall
   * @param {boolean} [reload=true] - Whether to reload after uninstalling
   * @returns {Promise<boolean>} Promise that resolves to false since uninstall is not implemented
   */
  async uninstallExtension(extensions: string[], reload = true): Promise<boolean> {
    console.log('uninstallExtension called:', { extensions, reload })
    // No-op in default implementation
    return Promise.resolve(false)
  }

  /**
   * Retrieves the application token
   * @returns {Promise<string | null>} Promise that resolves to null since no token is available
   */
  async getAppToken(): Promise<string | null> {
    return null
  }
}
