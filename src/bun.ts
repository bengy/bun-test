import * as B from "bun:test"

export type TestAPI = B.Test

// We reexport the type of the test function from bun:test
// as extending it did not work properly..
export type TestFunction = (
  label: string,
  fn: (() => void | Promise<unknown>) | ((done: (err?: unknown) => void) => void),
  options?: number | TestOptions
) => void

export type TestOptions = B.TestOptions
export type SuiteCollector = any

export const it = B.it
export const beforeAll = B.beforeAll
export const afterAll = B.afterAll
export const describe = B.describe

export const beforeEach = B.beforeEach
export const afterEach = B.afterEach
export const expect = B.expect
