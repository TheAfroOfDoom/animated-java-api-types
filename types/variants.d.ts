import type { Subscribable } from './subscribable'

declare global {
	namespace AnimatedJava {
		type TextureMap = Record<string, string>
		interface ITextureMapping {
			from: string
			fromTexture?: Texture
			to: string
			toTexture?: Texture
		}
	}
}

export interface IBoneConfig {
	nbt: string
}

export class Variant {
	textureMap: AnimatedJava.TextureMap
	boneConfig: Record<string, IBoneConfig>
	default?: boolean
	_name: string
	uuid: string
	affectedBones: Array<{ name: string; value: string }>
	affectedBonesIsAWhitelist: boolean

	constructor(
		name: string,
		textures?: AnimatedJava.TextureMap,
		uuid?: string,
		boneConfig?: Record<string, IBoneConfig>,
		affectedBones?: Array<{ name: string; value: string }>,
		affectedBonesIsAWhitelist?: boolean
	)

	get name(): string
	set name(name: string)

	addTextureMapping(from: string, to: string): void
	removeTextureMapping(from: string): void
	getTexture(id: string): Texture | undefined
	verifyTextures(silent?: boolean): boolean
	textureMapIterator(): Generator<AnimatedJava.ITextureMapping, void, unknown>
	createUniqueName(otherVariants: Variant[]): void
	toJSON(): {
		name: string
		textures: AnimatedJava.TextureMap
		uuid: string
		default: boolean
		boneConfig: Record<string, IBoneConfig>
		affectedBones: Array<{ name: string; value: string }>
		affectedBonesIsAWhitelist: boolean
	}

	static fromJSON(json: {
		name: string
		textures: AnimatedJava.TextureMap
		uuid: string
		boneConfig: Record<string, IBoneConfig>
		affectedBones?: Array<{ name: string; value: string }>
		affectedBonesIsAWhitelist?: boolean
	}): Variant
}

interface IVariantsContainerEvent {
	type: 'add' | 'remove' | 'select'
	variant?: Variant
}

export class VariantsContainer extends Subscribable<IVariantsContainerEvent> {
	variants: Variant[]
	private _selectedVariant?: Variant
	constructor(variants?: Variant[])

	get selectedVariant(): Variant | undefined
	set selectedVariant(variant: Variant | undefined)

	select(variant?: Variant): void
	addVariant(variant: Variant, isDefault?: boolean): Variant
	removeVariant(variant: Variant): void

	get defaultVariant(): Variant
	set defaultVariant(variant: Variant)

	verifyTextures(silent?: boolean): void
}

export function clearModelVariant(): void
export function applyModelVariant(variant: Variant): void
