import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UxProductsService } from 'src/app/services/ux-products.service';




@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.scss']
})
export class CurdComponent implements OnInit {
    dataTitle = this.uxProducts.getDataTitle();
   fetching = false;
   editMode:boolean = false;
   editIndex:any;
   @ViewChild('id') id:any=ElementRef;
   @ViewChild('name') name:any=ElementRef;
   @ViewChild('price') price:any=ElementRef;
  constructor(private uxProducts: UxProductsService) {
    
   }

  ngOnInit(): void {
    this.onFetchProduct()
  }

 
  
  products=[
    {
      id:'p1',
      name:'computer',
      price:34000
    },
    {
      id:'p2',
      name:'watch',
      price:3000
    },
    {
      id:'p3',
      name:'mouse',
      price:90
    },
    {
      id:'p4',
      name:'keyboard',
      price:600
    }
  ];

  onAddProduct(id:any , name:any , price:any){
    if(this.editMode){
      this.products[this.editIndex] = {
          id:id.value,
          name:name.value,
          price:price.value
      }
      this.editMode = false;
      this.id.nativeElement.value = '';
    this.name.nativeElement.value = '';
    this.price.nativeElement.value = '';
    }else{
      this.products.push({
        id:id.value,
        name:name.value,
        price:price.value
      })
    }
    this.onSaveProduct()
  }

  onSaveProduct(){
     this.uxProducts.saveProducts(this.products).subscribe((response)=>{
      console.log(response)
      
    },
    (err)=>console.log(err)
    )
  }

  onFetchProduct(){
    this.fetching = true;
    this.uxProducts.fetchProducts().subscribe((response)=>{
      // console.log(response)
      const data = JSON.stringify(response)
      console.log(data)
      this.products = JSON.parse(data)
      this.fetching = false;
    },
    (err)=>console.log(err)
    )
  }

  onDeleteProduct(id:number){
    if(confirm('Do you want to delete this product?')){
      this.products.splice(id,1);
      this.onSaveProduct()
    }
  }

  onEditProduct(index:number){
    this.editMode = true;
    this.editIndex = index;
    console.log(this.products[index].id)
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;
  }
}
