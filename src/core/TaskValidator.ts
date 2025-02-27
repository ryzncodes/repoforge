/**
 * Represents a task requirement in the learning platform
 */
export interface TaskRequirement {
  /** Unique identifier for the requirement */
  id: string;
  /** Description of what needs to be done */
  description: string;
  /** Function that checks if the requirement is met */
  validator: () => Promise<boolean>;
}

/**
 * TaskValidator class handles validation of learning tasks
 *
 * @example
 * ```typescript
 * const validator = new TaskValidator([
 *   {
 *     id: 'has-readme',
 *     description: 'Repository has a README.md file',
 *     validator: async () => fs.existsSync('README.md')
 *   }
 * ]);
 *
 * const results = await validator.validateAll();
 * ```
 */
export class TaskValidator {
  private requirements: TaskRequirement[];

  /**
   * Creates a new TaskValidator instance
   * @param requirements - List of task requirements to validate
   */
  constructor(requirements: TaskRequirement[]) {
    this.requirements = requirements;
  }

  /**
   * Validates a single requirement by its ID
   * @param id - The requirement ID to validate
   * @returns Promise resolving to the validation result
   * @throws Error if requirement ID is not found
   */
  async validate(id: string): Promise<boolean> {
    const requirement = this.requirements.find(r => r.id === id);
    if (!requirement) {
      throw new Error(`Requirement with ID "${id}" not found`);
    }

    return requirement.validator();
  }

  /**
   * Validates all requirements
   * @returns Promise resolving to an object mapping requirement IDs to their validation results
   */
  async validateAll(): Promise<Record<string, boolean>> {
    const results: Record<string, boolean> = {};

    for (const requirement of this.requirements) {
      results[requirement.id] = await requirement.validator();
    }

    return results;
  }

  /**
   * Gets a requirement by its ID
   * @param id - The requirement ID to find
   * @returns The found requirement or undefined
   */
  getRequirement(id: string): TaskRequirement | undefined {
    return this.requirements.find(r => r.id === id);
  }

  /**
   * Gets all requirements
   * @returns Array of all requirements
   */
  getAllRequirements(): TaskRequirement[] {
    return [...this.requirements];
  }
}
