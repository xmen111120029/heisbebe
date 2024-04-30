import { useSDK } from '@thirdweb-dev/react'

export default function Test() {
  const sdk = useSDK()

  console.log(sdk.wallet)
  async function data() {
    let amount = 0.0000001
    let arr = [
      '0x40aB46Fef30036dC90743C6d954c37eE61D9b678',
      '0x0C5107a5cf7eFfe18734E3228aB6865c1354c2ef',
    ]
    arr.forEach((arr) => {
      sdk.wallet.transfer(arr, 0.001)
    })
  }

  return (
    <button
      onClick={() => {
        data()
      }}
    >
      Airdrop
    </button>
  )
}
