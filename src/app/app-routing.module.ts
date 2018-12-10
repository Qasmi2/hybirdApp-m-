import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',

  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'deshboard',
    loadChildren: './pages/deshboard/deshboard.module#DeshboardPageModule'
  },
  {
    path: 'mall',
    loadChildren: './mall/mall.module#MallPageModule'
  },
  {
    path: 'goldsouk',
    loadChildren: './goldsouk/goldsouk.module#GoldsoukPageModule'
  },
  {
    path: 'floor',
    loadChildren: './floor/floor.module#FloorPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'roomdetail', loadChildren: './roomdetail/roomdetail.module#RoomdetailPageModule' },
  { path: 'hotel', loadChildren: './hotel/hotel.module#HotelPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
