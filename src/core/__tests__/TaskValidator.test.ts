import { TaskValidator, TaskRequirement } from '../TaskValidator';

describe('TaskValidator', () => {
  // Mock requirements for testing
  const mockRequirements: TaskRequirement[] = [
    {
      id: 'req1',
      description: 'First requirement',
      validator: async () => true,
    },
    {
      id: 'req2',
      description: 'Second requirement',
      validator: async () => false,
    },
  ];

  let validator: TaskValidator;

  beforeEach(() => {
    validator = new TaskValidator(mockRequirements);
  });

  describe('validate', () => {
    it('should validate a single requirement successfully', async () => {
      const result = await validator.validate('req1');
      expect(result).toBe(true);
    });

    it('should return false for failed validation', async () => {
      const result = await validator.validate('req2');
      expect(result).toBe(false);
    });

    it('should throw error for non-existent requirement', async () => {
      await expect(validator.validate('non-existent')).rejects.toThrow(
        'Requirement with ID "non-existent" not found'
      );
    });
  });

  describe('validateAll', () => {
    it('should validate all requirements', async () => {
      const results = await validator.validateAll();
      expect(results).toEqual({
        req1: true,
        req2: false,
      });
    });
  });

  describe('getRequirement', () => {
    it('should return requirement by id', () => {
      const requirement = validator.getRequirement('req1');
      expect(requirement).toEqual(mockRequirements[0]);
    });

    it('should return undefined for non-existent requirement', () => {
      const requirement = validator.getRequirement('non-existent');
      expect(requirement).toBeUndefined();
    });
  });

  describe('getAllRequirements', () => {
    it('should return all requirements', () => {
      const requirements = validator.getAllRequirements();
      expect(requirements).toEqual(mockRequirements);
    });

    it('should return a copy of requirements array', () => {
      const requirements = validator.getAllRequirements();
      requirements.push({
        id: 'new',
        description: 'New requirement',
        validator: async () => true,
      });

      // Original requirements should not be modified
      expect(validator.getAllRequirements()).toEqual(mockRequirements);
    });
  });
});
