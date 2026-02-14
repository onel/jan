/**
 * Default App Service - Generic implementation with minimal returns
 */

import type { AppService, LogEntry } from './types'

/**
 * Default implementation of AppService that provides minimal functionality.
 * This service acts as a fallback when platform-specific implementations are not available.
 */
export class DefaultAppService implements AppService {
  /**
   * Performs a factory reset operation.
   * This is a no-op implementation that does nothing.
   * @returns Promise that resolves when the operation completes
   */
  async factoryReset(): Promise<void> {
    // No-op
  }

  /**
   * Reads log entries from the system.
   * @returns Promise that resolves to an empty array of log entries
   */
  async readLogs(): Promise<LogEntry[]> {
    return []
  }

  /**
   * Parses a log line string into a LogEntry object.
   * Creates a basic log entry with default values and the provided message.
   * @param line - The log line string to parse
   * @returns LogEntry object with timestamp, level, target, and message
   */
  parseLogLine(line: string): LogEntry {
    return {
      timestamp: Date.now(),
      level: 'info',
      target: 'default',
      message: line ?? '',
    }
  }

  /**
   * Gets the path to the Jan data folder.
   * @returns Promise that resolves to undefined as no data folder is configured
   */
  async getJanDataFolder(): Promise<string | undefined> {
    return undefined
  }

  /**
   * Relocates the Jan data folder to a new path.
   * This is a no-op implementation that only logs the operation.
   * @param path - The new path for the data folder
   * @returns Promise that resolves when the operation completes
   */
  async relocateJanDataFolder(path: string): Promise<void> {
    console.log('relocateJanDataFolder called with path:', path)
    // No-op - not implemented in default service
  }

  /**
   * Gets the current server status.
   * @returns Promise that resolves to false indicating the server is not running
   */
  async getServerStatus(): Promise<boolean> {
    return false
  }

  /**
   * Reads and parses a YAML file.
   * This method is not implemented in the default service and will throw an error.
   * @param path - The path to the YAML file to read
   * @returns Promise that rejects with an error
   * @throws Error indicating the method is not implemented
   */
  async readYaml<T = unknown>(path: string): Promise<T> {
    console.log('readYaml called with path:', path)
    throw new Error('readYaml not implemented in default app service')
  }
}
