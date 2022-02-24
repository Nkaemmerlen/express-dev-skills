const skills = [
  {language: "JavaScript", learned: true, _id: 9281388},
  {language: "HTML", learned: true, _id: 698344},
  {language: "CSS", learned: true, _id: 69420},
  {language: "Swift", learned: false, _id: 42069}
]
const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, skills)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}
const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

export{
  find,
  findById
}