import * as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import { NewTransaction } from '../new-transaction'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="./logo.svg" alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransaction />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
