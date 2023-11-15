import data from '../data'

export default function handler(req,res){
    const { tempID } = req.query;
    const [temp] = data;

    if(tempID){
        const comission = Comission.find( value => value.id == tempID)
        return res.status(200).json(temp)
    }
    return res.status(400).json({error: "Data not Found"})
}