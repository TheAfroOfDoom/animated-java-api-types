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
			condition: string
		}
		commands?: {
			commands: string
			condition: string
		}
		animationState?: {
			animation: string
			condition: string
		}
	}>
	/**
	 * Duration of the animation in ticks (AKA frames). Same as animation.frames.length
	 */
	duration: number
}
