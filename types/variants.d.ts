import type { Subscribable } from './subscribable'

export type TextureId = `${string}::${string}`
export type TextureMap = Record<TextureId, TextureId>
export interface ITextureMapping {
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

export class Variant {
	textureMap: TextureMap
	default?: boolean
	_name: string
	uuid: string
	constructor(name: string, textures?: TextureMap, uuid?: string)

	get name(): string
	set name(name: string)

	addTextureMapping(from: TextureId, to: TextureId): void
	removeTextureMapping(from: TextureId): void
	getTexture(id: TextureId): Texture | undefined
	verifyTextures(silent?: boolean): boolean
	textureMapIterator(): Generator<ITextureMapping, void, unknown>
	createUniqueName(otherVariants: Variant[]): void
	toJSON(): {
		name: string
		textures: TextureMap
		uuid: string
		default: boolean
	}

	static fromJSON(json: {
		name: string
		textures: TextureMap
		uuid: string
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
