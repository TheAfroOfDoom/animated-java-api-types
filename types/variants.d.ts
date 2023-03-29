import type { Subscribable } from './subscribable'

declare global {
	namespace AnimatedJava {
		type TextureId = `${string}::${string}`
		type TextureMap = Record<TextureId, TextureId>
		interface ITextureMapping {
			from: TextureId
			fromUUID?: string
			fromName?: string
			fromTexture?: Texture
			fallbackFrom?: boolean
			to: TextureId
			toUUID?: string
			toName?: string
			toTexture?: Texture
			fallbackTo?: boolean
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

	addTextureMapping(from: AnimatedJava.TextureId, to: AnimatedJava.TextureId): void
	removeTextureMapping(from: AnimatedJava.TextureId): void
	getTexture(id: AnimatedJava.TextureId): Texture | undefined
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
