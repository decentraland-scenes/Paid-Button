import { PaidButton } from './paidButton'
import { buildScene } from './builderContent'
import Door from './door'

export let sceneMessageBus = new MessageBus()

buildScene()

const door = new Door(
  {
    position: new Vector3(9.275432586669922, 0, 9.929542541503906),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  },
  sceneMessageBus
)

const button = new PaidButton(
  { position: new Vector3(7, 0, 11), rotation: Quaternion.Euler(0, 0, 0) },
  '0xe2b6024873d218B2E83B462D3658D8D7C3f55a18',
  10,
  'Open Door',
  () => {
    sceneMessageBus.emit('openDoor', {})
  }
)
