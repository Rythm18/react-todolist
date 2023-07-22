import PropTypes from 'prop-types'
import { Button } from './Button'

export const Header = ({title}) => {
    const onClick = () =>{
        console.log("Click")
    }
  return (
   <header className='header'>
    <h1>{title}</h1>
    <Button text={"Add"} onClick={onClick} />
   </header>
  )
}

