import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../models/product';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch one product by id', () => {
    const dummyProduct: Product = {
      id: 1,
      title: 'Dummy Product',
      price: 100,
      discountPercentage: 10,
      rating: 4.5,
      stock: 50,
      brand: 'Dummy Brand',
      category: 'Dummy Category',
      thumbnail: 'thumbnail.jpg',
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg']
    };

    service.getOneById(1).subscribe(product => {
      expect(product).toEqual(dummyProduct);
    });

    const req = httpMock.expectOne(service.url + '1');
    expect(req.request.method).toBe('GET');
    req.flush(dummyProduct);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
