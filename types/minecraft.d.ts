export * from './minecraft/JsonText'
export * from './minecraft/searchGenerator'

export function safeFunctionName(name: string): string
export function isValidResourcePackMcMeta(path: string): boolean
export function isValidResourcePackPath(path: string): boolean

interface IParsedResourcePackPath {
	resourcePackRoot: string
	namespace: string
	resourcePath: string
	resourceLocation: string
	fileName: string
}

export function parseResourcePackPath(
	path: string
): IParsedResourcePackPath | false

export function isValidDatapackName(name: string, type: string): boolean
