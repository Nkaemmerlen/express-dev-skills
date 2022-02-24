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
function create(skill, callback) {
  console.log('this is the skill', skill)
  skill._id = Date.now() % 1000000
  skill.learned = false
  // skill.language = skill
  skills.push(skill)
  return callback(null, skill)
}
function findByIdAndDelete(id, callback) {
  try {
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = skills.splice(idx, 1)
    if (!deletedSkill.length) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

export{
  find,
  findById,
  create,
  findByIdAndDelete
}