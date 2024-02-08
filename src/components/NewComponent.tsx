type NewComponentPropsType = {
  students: Array<StudentPropsType>
}
type StudentPropsType = {
  id: number
  name: string
  age: number
}

export const NewComponent = ({students}: NewComponentPropsType) => {
  return (
    <ul>
      {students.map((student: StudentPropsType) => {
        return (
          <li key={student.id}>
            <span>name: {student.name},</span>
            <span>age: {student.age}</span>
          </li>
        )
      })}
    </ul>
  )
}