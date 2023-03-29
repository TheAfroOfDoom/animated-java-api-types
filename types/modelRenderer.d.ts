// import type { IAnimationBone } from './animationRenderer'
import type { Setting } from './settings'

declare global {
	namespace AnimatedJava {
		export interface IRenderedFace {
			uv: number[]
			rotation?: number
			texture: string
			cullface?: string
			tintindex?: number
		}

		export interface IRenderedElement {
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
		export interface IRenderedModel {
			parent?: string
			textures: Record<string, string>
			elements?: IRenderedElement[]
		}

		export interface IRenderedNode {
			type: string
			parent: string
			name: string
			node: OutlinerNode
		}

		export interface ICamera extends OutlinerElement {
			name: string
			path: string
			position: ArrayVector3
			rotation: ArrayVector3
			linked_preview: string
			camera_linked: boolean
			visibility: boolean
		}

		export interface IRenderedNodes {
			Bone: IRenderedNode & {
				type: 'bone'
				node: Group
				textures: Record<string, Texture>
				model: IRenderedModel
				customModelData: number
				modelPath: string
				resourceLocation: string
				boundingBox: THREE.Box3
				scale: number
				nbt: string
			}
			Camera: IRenderedNode & {
				type: 'camera'
				name: string
				node: ICamera
			}
			Locator: IRenderedNode & {
				type: 'locator'
				node: Locator
			}
		}

		export type AnyRenderedNode = IRenderedNodes[keyof IRenderedNodes]

		export interface IRenderedBoneVariant {
			model: IRenderedModel
			customModelData: number
			modelPath: string
			resourceLocation: string
		}

		export interface INodeStructure {
			uuid: string
			children: INodeStructure[]
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
			 * A map of outliner node UUIDs to rendered bones
			 */
			nodeMap: Record<string, AnyRenderedNode>
			/**
			 * The recursive structure of node UUIDs
			 */
			nodeStructure: INodeStructure
			/**
			 * A map of texture UUIDs to textures
			 */
			textures: Record<string, Texture>
			/**
			 * The default pose of the rig as an Animation frame
			 */
			defaultPose: IAnimationNode[]
			/**
			 * The export folder for the rig models
			 */
			modelExportFolder: string
			/**
			 * The export folder for the rig textures
			 */
			textureExportFolder: string
		}
	}
}
