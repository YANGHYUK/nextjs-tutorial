import styles from "styles/Home.module.css"
import { useSelector, useDispatch } from "react-redux"
import { actions as countActions } from "store/modules/Count/countModule"
export default function Count(props) {
  const { number, message } = useSelector((state) => ({
    number: state.count.number,
    message: state.count.message,
  }))

  const dispatch = useDispatch()

  const onAddNumber = () => dispatch(countActions.addNumber())
  const onAbstractNumber = () => dispatch(countActions.abstractNumber())

  const onAddNumberSaga = () => dispatch(countActions.addNumberSaga())

  const onAbstractNumberSaga = () => dispatch(countActions.abstractNumberSaga())

  return (
    <div className={styles.container}>
      <div>Number: {number}</div>
      <div>Message: {message}</div>
      <div>
        <div>redux</div>
        <button onClick={onAbstractNumber}>-</button>
        <button onClick={onAddNumber}>+</button>
      </div>

      <div>
        <div>redux-saga</div>
        <button onClick={onAbstractNumberSaga}>-</button>
        <button onClick={onAddNumberSaga}>+</button>
      </div>
    </div>
  )
}
