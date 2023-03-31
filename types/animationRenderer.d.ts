declare namespace AnimatedJava {
	export interface IAnimationNode {
		type: 'bone' | 'camera' | 'locator'
		name: string
		uuid: string
		node?: Group | NullObject | Locator | OutlinerElement
		matrix: THREE.Matrix4
		pos: THREE.Vector3
		rot: THREE.Quaternion
		scale: THREE.Vector3
		interpolation?: 'instant' | 'default'
	}
	export interface IRenderedAnimation {
		name: string
		frames: Array<{
			nodes: IAnimationNode[]
			variant?: {
				uuid: string
				executeCondition: string
			}
			commands?: {
				commands: string
				executeCondition: string
			}
		}>
		/**
		 * Duration of the animation in ticks (AKA frames). Same as animation.frames.length
		 */
		duration: number
		loopMode: 'loop' | 'once' | 'hold'
	}
}
