// Re-export the base fixture from the package
// Override or extend test/expect here if needed
import { test as base } from '@playwright/test';

export const test = base;
export const expect = base.expect;
