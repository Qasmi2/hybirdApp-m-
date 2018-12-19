import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'

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
  { path: 'hotel', loadChildren: './hotel/hotel.module#HotelPageModule' },
  { path: 'floor1', loadChildren: './Page/floor1/floor1.module#Floor1PageModule' },
  { path: 'floor2', loadChildren: './Page/floor2/floor2.module#Floor2PageModule' },
  { path: 'floor3', loadChildren: './Page/floor3/floor3.module#Floor3PageModule' },
  { path: 'floor4', loadChildren: './Page/floor4/floor4.module#Floor4PageModule' },
  { path: 'floor5', loadChildren: './Page/floor5/floor5.module#Floor5PageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
