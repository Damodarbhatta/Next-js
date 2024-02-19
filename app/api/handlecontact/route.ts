import { Contact } from "@/modals/Contact"
import mongoose from "mongoose"

export async function POST(req: Request){
    console.log("this is request ", req.body)
    const data = await req.json()
    console.log(data)
    mongoose.connect(`${process.env.MONGO_URL}`)
    await Contact.create(data)
    return new Response(JSON.stringify(data))
}

export async function GET(){
    mongoose.connect(`${process.env.MONGO_URL}`)
    const foundData = await Contact.find()
    if(foundData){
        return new Response(JSON.stringify(foundData))
    }else {
        return new Response(JSON.stringify("no data in server"))
    }
}

export async function PUT(req: Request){
    const data = await req.json()
    mongoose.connect(`${process.env.MONGO_URL}`)
    const updatedData = await Contact.findByIdAndUpdate(data._id, data,{new : true} )
    return new Response(JSON.stringify(updatedData))
}

export async function DELETE(req: Request){
    const data = await req.json()
    mongoose.connect(`${process.env.MONGO_URL}`)
    await Contact.findByIdAndDelete(data._id)
}


