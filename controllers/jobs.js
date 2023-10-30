const getAllJobs = async(req, res) => {
  req.send('get all jobs')
}

const getJob = async (req, res) => {
  res.send('get one job')
}

const createJob = async (req, res) => {
  res.send('create a job')
}

const updateJob = async (req, res) => {
  res.send('Update an existing job')
}

const deleteJob = async (req, res) => {
  res.send('Delete a job')
}


module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
