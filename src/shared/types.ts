export type HeaderSize = 1 | 2 | 3 | 4 | 5 | 6

export type Shape = 'rect' | 'circle'
export type Align = 'left' | 'center' | 'right'
export type Direction = 'horizontal' | 'vertical'
export type MessageType = 'success' | 'failure' | 'info' | 'alert'
export type PackType = 'advertisement' | 'currency' | 'exchange'

export type ResourcesT = {coins?: number, crystals?: number, tickets?: number, energy?: number}

export type IconT = {base64: string, name: string, id: number}
