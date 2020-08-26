import { TestBed, async, getTestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TariffService } from './tariff.service';
import { Tariff } from './Tariff';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let injector: TestBed;
  let tariffService: TariffService; 
  let httpMock: HttpTestingController; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent
      ],
      providers: [TariffService]
    }).compileComponents();
    injector = getTestBed();
    tariffService = injector.get(TariffService);
    httpMock = injector.get(HttpTestingController);
  }));

  class MockTariffService extends TariffService { 
    getTarifs() : Promise<any[]> {
      let tariff: Tariff [] =
      [  
       {
          id : 1,
          name : "name 1"
        }
      ]
        return new Promise((resolve) => {
          resolve(
            tariff
          );
      });
    }
}


  it('should init the sort', () => {
     
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; 
    expect(app.sortOrder).toEqual(1);
    expect(app.sortField).toEqual("price");

    app.ngOnInit();

    expect(app.sortOptions).toEqual([ 
      {label: 'Download Speed', value: 'downloadSpeed'}, 
      {label: 'Upload Speed', value: 'uploadSpeed'}, 
      {label: 'Price', value: 'price'}, 
      ]); 
    expect(app.sortDirections).toEqual([
      {label: 'Asc', value: 1 },
      {label: 'Desc', value: -1 },
    ]);
  });

//todo add more unit tests for data loaded in dataview 
});
