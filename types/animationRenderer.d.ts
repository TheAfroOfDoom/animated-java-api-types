declare namespace AnimatedJava {
	export interface IAnimationBone {
		name: string
		uuid: string
		group?: Group
		matrix: number[]
	}

	export interface IRenderedAnimation {
		name: string
		frames: Array<{
			bones: IAnimationBone[]
			variant?: {
				uuid: string
				executeCondition: string
			}
			commands?: {
				commands: string
				executeCondition: string
			}
			animationState?: {
				animation: string
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
