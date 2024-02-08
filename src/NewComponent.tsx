export const NewComponent = ({students}: any) => {
  return (
    <div>
      {students.map((student: any) => {
        return (
          <div key={student.id}>
            <h1>{student.name}</h1>
            <h2>{student.age}</h2>
          </div>
        )
      })}
    </div>
  )
}