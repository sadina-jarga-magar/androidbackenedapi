const Product= require('../../models/cart');
const mongoose= require('mongoose');
const DBTest= 'mongodb://127.0.0.1:27017/testmycosmetics';
beforeAll(async()=>{
    await mongoose.connect(DBTest,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
})


describe(' Skin Product Schema Test',()=>{
    it('should be able to add new product',async()=>{
        let product= await Product.create({'productname':'Cleanser','productdesc':'good for you skin to remove your impurities','productimg':'cleanser.jpg'});
        expect(product.productname).toMatch('Cleanser');
        expect(product.productdesc).toMatch('good for you skin to remove your impurities');
        expect(product.productimg).toMatch('cleanser.jpg');
     
    })
    it('should be able to update skin product',async()=>{
        let product= await Product.findOne({'productname':'Cleanser','productdesc':'good for you skin to remove your impurities','productimg':'cleanser.jpg'});
        product.productname='serum';
        product.productimg='serum.jpg';
        product.productdesc='remove all your blemishes'
        let newproduct= await product.save();
        expect(newproduct.productname).toBe('serum');
        expect(newproduct.productimg).toBe('serum.jpg');
        expect(newproduct.productdesc).toBe('remove all your blemishes');
    })
    it('should be able to delete product',async()=>{
        let product= await Product.findOneAndDelete({'productname':'serum','productimg':'serum.jpg','productdesc':'remove all your blemishes'});
        expect(product.productname).toBe('serum');
        expect(product.productimg).toBe('serum.jpg');
        expect(product.productdesc).toBe('remove all your blemishes');
    })
})