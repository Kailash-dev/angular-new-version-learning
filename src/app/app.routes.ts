import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { ObservableComponent } from './components/observable/observable.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { AllComponent } from './components/all/all.component';
import { MapoperatorComponent } from './components/mapoperator/mapoperator.component';
import { FilteroperatorComponent } from './components/filteroperator/filteroperator.component';
import { MergemapoperatorComponent } from './components/mergemapoperator/mergemapoperator.component';
import { SwitchmapoperatorComponent } from './components/switchmapoperator/switchmapoperator.component';
import { ContcatmapoperatorComponent } from './components/contcatmapoperator/contcatmapoperator.component';
import { TakeoperatorComponent } from './components/takeoperator/takeoperator.component';
import { DeboundtimeoperatorComponent } from './components/deboundtimeoperator/deboundtimeoperator.component';
import { DistinctunitchangedComponent } from './components/distinctunitchanged/distinctunitchanged.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BooksComponent } from './components/books/books.component';


export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'user', component: UserComponent},
    {path: 'book', component: BooksComponent},
    {path: 'observable', component: ObservableComponent, children:[
      
        {path: '', component: AllComponent},
        {path: 'from-event', component: FromEventComponent},
        { path: 'map', component: MapoperatorComponent },
        { path: 'filter', component: FilteroperatorComponent },
        { path: 'mergeMap', component: MergemapoperatorComponent },
        { path: 'switchMap', component: SwitchmapoperatorComponent },
        { path: 'concatMap', component: ContcatmapoperatorComponent },
        { path: 'take', component: TakeoperatorComponent },
        { path: 'debounceTime', component: DeboundtimeoperatorComponent },
        { path: 'distinctUntilChanged', component: DistinctunitchangedComponent },
    ]},
    { path: '**', component:NotfoundComponent  },
];
