const Conatct = require('../models/contactmodel')
const getAllcontact = async (req, res) => {
    const conatcts = await Conatct.find();
    res.status(200).json(conatcts);
}
const createContact = async (req, res) => {
    console.log('Body is ', req.body)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error('All fields are mandatory')
    } else {
        const contact = await Conatct.create({ name, email, phone })
        console.log('Created ', contact)
        res.status(200).json(contact);
    }

}
const updateContact = async (req, res) => {
    const updatedContact = await Conatct.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedContact);
}
const deletContact = async (req, res) => {
    const _id = req.params.id;
    const contact = await Conatct.deleteOne({ _id })
    console.log(contact)
    res.status(200).send(`delete ${req.params.id} from controler`);
}
const getOneContact = async (req, res) => {
    const contact = await Conatct.findById(req.params.id)
    console.log(contact)
    if (!contact) {
        res.status(400)
        throw new Error('All fields are mandatory')
    }
    else { res.status(200).json(contact); }

}
module.exports = { getAllcontact, createContact, updateContact, deletContact, getOneContact }