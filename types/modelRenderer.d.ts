import type { IAnimationBone } from './animationRenderer'

interface IRenderedFace {
	uv: number[]
	rotation?: number
	texture: string
	cullface?: string
	tintindex?: number
}

interface IRenderedElement {
	from: number[]
	to: number[]
	shade?: boolean
	rotation?:
		| {
				angle: number
				axis: string
				origin: number[]
				rescale?: boolean
		  }
		| number[]
	faces?: Record<string, IRenderedFace>
}

/**
 * An actual Minecraft model
 */
interface IRenderedModel {
	parent?: string
	textures: Record<string, string>
	elements?: IRenderedElement[]
}

interface IRenderedBone {
	parent: string
	name: string
	textures: Record<string, Texture>
	model: IRenderedModel
	customModelData: number
	modelPath: string
	resourceLocation: string
	boundingBox: THREE.Box3
	scale: number
}

interface IRenderedBoneVariant {
	model: IRenderedModel
	customModelData: number
	modelPath: string
	resourceLocation: string
}

interface IBoneStructure {
	uuid: string
	children: IBoneStructure[]
}

export interface IRenderedRig {
	/**
	 * A map of bone UUIDs to rendered models
	 */
	models: Record<string, IRenderedModel>
	/**
	 * A map of variant names to maps of rendered models
	 */
	variantModels: Record<string, Record<string, IRenderedBoneVariant>>
	/**
	 * A map of bone UUIDs to rendered bones
	 */
	boneMap: Record<string, IRenderedBone>
	/**
	 * A recursive structure of bone UUIDs
	 */
	boneStructure: IBoneStructure
	/**
	 * A map of texture UUIDs to textures
	 */
	textures: Record<string, Texture>
	/**
	 * The default pose of the rig as an Animation frame
	 */
	defaultPose: IAnimationBone[]
	/**
	 * The output folder for the rig
	 */
	outputFolder: string
}
