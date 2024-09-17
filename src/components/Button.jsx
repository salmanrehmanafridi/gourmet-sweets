
export default function Button({title, classname}) {
  return (
    <button className={classname || ''}>{title || 'Button'}</button>
  )
}
