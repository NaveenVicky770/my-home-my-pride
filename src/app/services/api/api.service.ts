/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = 'https://presentience-clients.in/soil/';
  apiURL = this.baseURL + 'restapi/';
  imagesPath = {
    location : this.baseURL + 'assets/location/',
    categories : this.baseURL + 'assets/category/',
    products : this.baseURL + 'assets/products/',
    banners : this.baseURL + 'assets/banners/',
    user_image: this.baseURL + 'assets/images/',
    orders_inv: this.baseURL + 'assets/invoices/Invoice_'
  };
  constructor(private http: HttpClient) { }

  BaseURL()
  {
    return this.baseURL;
  }

  ImagesPath(imageType: string | number)
  {
    if(this.imagesPath[imageType])
    {
      return this.imagesPath[imageType];
    }
    else
    {
      return '';
    }
  }
  ImagesPathArr()
  {
    return this.imagesPath;
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        //'Backend returned code ${error.status}, ' + 'body was: ${error.error}'
      );
    }
    // return an observable with a user-facing error message
    var errorarr = [];
    var errorobj = { error: "401", errorstatus: error.status };
    errorarr.push(errorobj);
    //return throwError('Something bad happened; please try again later.');
    return errorarr;
  }

  getPostData(method_name: string,requestData: any)
  {
    return this.http.post(this.apiURL + method_name, requestData).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public UserRegister(requestData: any)
  {
    return this.getPostData('user_register',requestData);
  }

  public UserLogin(requestData: any)
  {
    return this.getPostData('login',requestData);
  }
  public ResendOTP(requestData: any)
  {
    // request data must be {mobile_number:'',type:''} type may be reg, login or profile
    return this.getPostData('resend_otp',requestData);
  }
  public UserDetails(requestData: any)
  {
    return this.getPostData('user_details',requestData);
  }
  public AddUserAddress(requestData: any)
  {
    return this.getPostData('add_user_address',requestData);
  }
  public UserAddresses(requestData: any)
  {
    return this.getPostData('user_all_addresses',requestData);
  }
  public UserSingleAddress(requestData: any)
  {
    return this.getPostData('single_address',requestData);
  }
  public AllLocations(requestData: any)
  {
    return this.getPostData('all_locations',requestData);
  }
  public SingleLocation(requestData: any)
  {
    return this.getPostData('single_location',requestData);
  }
  public AllBanners(requestData: any)
  {
    return this.getPostData('home_banner',requestData);
  }
  public AllSliders(requestData: any)
  {
    return this.getPostData('all_sliders',requestData);
  }
  public SingleBanner(requestData: any)
  {
    return this.getPostData('single_banner',requestData);
  }
  public AllCategories(requestData: any)
  {
    return this.getPostData('all_categories',requestData);
  }
  public SingleCategory(requestData: any)
  {
    return this.getPostData('single_category',requestData);
  }
  public AllProductsWithAndWithoutCats(requestData: any)
  {
    return this.getPostData('all_products_with_and_without_cats',requestData);
  }
  public AllProductsWithAndWithoutCatsBands(requestData: any)
  {
    return this.getPostData('all_products_with_and_without_cats_brands',requestData);
  }
  public SingleProduct(requestData: any)
  {
    return this.getPostData('single_product',requestData);
  }
  public SubscribeProduct(requestData: any)
  {
    return this.getPostData('add_product_subscribe_post',requestData);
  }
  public SubscribedProducts(requestData: any)
  {
    return this.getPostData('member_subscribed_products',requestData);
  }
  public AddToWallet(requestData: any)
  {
    return this.getPostData('add_amount_to_wallet',requestData);
  }
  public CheckProductQty(requestData: any)
  {
    return this.getPostData('check_prod_qty_available',requestData);
  }
  public UpdateUserDetails(requestData: any)
  {
    return this.getPostData('update_user_details',requestData);
  }
  public ChnagePassword(requestData: any)
  {
    return this.getPostData('changepassword',requestData);
  }
  public ForgotPassword(requestData: any)
  {
    return this.getPostData('forgotpassword',requestData);
  }
  public UserWalletHistory(requestData: any)
  {
    return this.getPostData('user_wallet_history',requestData);
  }
  public UserStatementHistory(requestData: any)
  {
    return this.getPostData('statement_history',requestData);
  }
  public UserRechargeHistory(requestData: any)
  {
    return this.getPostData('recharge_history',requestData);
  }
  public UserRefundHistory(requestData: any)
  {
    return this.getPostData('refund_history',requestData);
  }
  public AllOrders(requestData: any)
  {
    return this.getPostData('my_total_orders',requestData);
  }
  public OrderDetails(requestData: any)
  {
    return this.getPostData('single_order_view',requestData);
  }
  public AllProductsInCart(requestData: any)
  {
    return this.getPostData('all_products_in_cart',requestData);
  }
  public AllApartments(requestData: any)
  {
    return this.getPostData('all_appart_ments',requestData);
  }
  public AllBlocks(requestData: any)
  {
    return this.getPostData('all_blocks_with_and_without_apartments',requestData);
  }
  public AllFloors(requestData: any)
  {
    return this.getPostData('all_flats_with_and_without_block_and_apartment',requestData);
  }
  public SaveUserApartmentDetails(requestData: any)
  {
    return this.getPostData('add_user_apartment_details',requestData);
  }
  public UserApartmentDetails(requestData: any)
  {
    return this.getPostData('user_apartment_details',requestData);
  }
  public PopularProducts(requestData: any)
  {
    return this.getPostData('popular_products',requestData);
  }
  public GetProductFavourate(requestData: any)
  {
    return this.getPostData('get_product_favourate',requestData);
  }
  public MakeFavourite(requestData: any)
  {
    return this.getPostData('add_or_remove_from_product_favourate',requestData);
  }
  public RemoveUserApartmentDetails(requestData: any)
  {
    return this.getPostData('remove_user_apartment_details',requestData);
  }
  public UserAddress(requestData: any)
  {
    return this.getPostData('user_address',requestData);
  }
  public UpdateUserApartmentDetails(requestData: any)
  {
    return this.getPostData('update_user_apartment_details',requestData);
  }
  public PlaceOrder(requestData: any)
  {
    return this.getPostData('place_order',requestData);
  }
  public AllBrandsByCategory(requestData: any)
  {
    return this.getPostData('all_category_brand',requestData);
  }
  public AllSubCategories(requestData: any)
  {
    return this.getPostData('all_sub_categories',requestData);
  }
  public AddSubscribeProduct(requestData: any)
  {
    return this.getPostData('add_subscribe_product',requestData);
  }
  public getSubscribeProducts(requestData: any)
  {
    return this.getPostData('member_subscribed_products',requestData);
  }
  public addWalletAmount(requestData: any)
  {
    return this.getPostData('add_amount_to_wallet',requestData);
  }
  public removeSubscribe(requestData: any)
  {
    return this.getPostData('delete_product_subscraibe',requestData);
  }
  public getSubscribeMesasures(requestData: any)
  {
    return this.getPostData('single_subscribed_products',requestData);
  }
  public pauseSubscribeProductTemp(requestData: any)
  {
    return this.getPostData('changing_subscribe_product',requestData);
  }
  public pauseSubscribeProduct(requestData: any)
  {
    return this.getPostData('changing_subscribe_product',requestData);
  }
   public UnpauseSubscribeProduct(requestData: any)
  {
    return this.getPostData('unpause_the_subscraibe_product',requestData);
  }
  public ModifySubscribeTemp(requestData: any)
  {
    return this.getPostData('temporarly_modify_subscribe_product',requestData);
  }
  public ModifySubscribePerminent(requestData: any)
  {
    return this.getPostData('permenently_modify_subscribe_product',requestData);
  }
  public scannedProducts(requestData: any)
  {
    return this.getPostData('get_scanned_products',requestData);
  }
   public cancelOrder(requestData: any)
  {
    return this.getPostData('user_order_cancellation',requestData);
  }
   public getSubscribeDeleteReasons(requestData: any)
  {
    return this.getPostData('subscription_dalete_reason',requestData);
  }
   public offerbannerproducts(requestData: any)
  {
    return this.getPostData('offer_banner_products',requestData);
  }
   public AddDefaultAddress(requestData: any)
  {
    return this.getPostData('add_default_user_apartment_details',requestData);
  }
  public UserStatementdetils(requestData: any)
  {
    return this.getPostData('billing_history_details',requestData);
  }
  public Check_cuopun(requestData: any)
  {
    return this.getPostData('check_coupon_existed_or_not',requestData);
  }
  public All_cuopun(requestData: any)
  {
    return this.getPostData('all_my_coupons',requestData);
  }
  public Delivery_Charges(requestData: any)
  {
    return this.getPostData('service_and_delivery_charge',requestData);
  }
  public DeliverySlots(requestData: any)
  {
    return this.getPostData('delivery_slots',requestData);
  }





}
