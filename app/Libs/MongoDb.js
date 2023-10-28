import mongoose from 'mongoose'

const connectMBD = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)

    } catch (error) {
        console.log('Error');
    }
}


export default connectMBD;