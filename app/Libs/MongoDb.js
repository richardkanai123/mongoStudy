import mongoose from 'mongoose'

const connectMBD = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)

        console.log('Mongooo!!!')

    } catch (error) {
        console.log('Error');
    }
}


export default connectMBD;