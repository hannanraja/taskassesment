import './component.css'
import img from './vendor.PNG'
function Tabledata(){
return (
<div >
<div class="container">
  <div class="row">
    <div class="">
      <table class="table table-bordered table-hover dt-responsive">
        <thead>
          <tr>
            <th>Type</th>
            <th>Order</th>
            <th>Customer</th>
            <th>Zip code</th>
            <th>Order time</th>
            <th>Vendors</th>
            <th>Riders</th>
            <th>Order amount</th>
            <th>Performance</th>


          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='type'>Squad</td>
            <td>43245</td>
            <td>TOmmy</td>
            <td>3434</td>
            <td>3.13</td>
            <td><img src={img} ></img></td>
            <td>Bill cohen</td>
            <td>$ 123</td>
            <td> error</td>
          </tr>
          <tr>
            <td className='type'>Squad</td>
            <td>43245</td>
            <td>TOmmy</td>
            <td>3434</td>
            <td>3.13</td>
            <td><img src={img} ></img></td>
            <td>Bill cohen</td>
            <td>$ 123</td>
            <td> error</td>
          </tr>
          <tr>
            <td className='type'>Squad</td>
            <td>43245</td>
            <td>TOmmy</td>
            <td>3434</td>
            <td>3.13</td>
            <td><img src={img} ></img></td>
            <td>Bill cohen</td>
            <td>$ 123</td>
            <td> error</td>
          </tr>
          <tr>
            <td className='type'>Squad</td>
            <td>43245</td>
            <td>TOmmy</td>
            <td>3434</td>
            <td>3.13</td>
            <td><img src={img} ></img></td>
            <td>Bill cohen</td>
            <td>$ 123</td>
            <td> error</td>
          </tr>
      
        </tbody>
      </table>
    </div>
  </div>
</div>



</div>
)
}
export default Tabledata;