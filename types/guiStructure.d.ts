interface IGUIElement {
	type: string
}

interface IGUIElements {
	group: IGUIElement & {
		type: 'group'
		openByDefault: boolean
		title: string
		children: AnimatedJava.GUIStructure
	}
	setting: IGUIElement & {
		type: 'setting'
		settingId: AnimatedJava.SettingID
	}
	toggle: {
		type: 'toggle'
		settingId: AnimatedJava.SettingID
		title?: string
		activeTitle?: string
		inactiveTitle?: string
		active: AnimatedJava.GUIStructure
		inactive: AnimatedJava.GUIStructure
	}
}

declare namespace AnimatedJava {
	type AnyGUIElement = IGUIElements[keyof IGUIElements]
	type GUIStructure = AnyGUIElement[]
}
