import React, { Component } from 'react';
import ListMakanan from "../ListData/ListMakanan";


class MenuMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesan : 0
    };
    this.ubahPesanan = this.ubahPesanan.bind(this);
    this.pesanan = this.pesanan.bind(this);

  }

  ubahPesanan (){
    this.setState((state, props) => {
      return{
        pesan : state.pesan + 1
      };
    });
  }

  pesanan(e){
    console.log(e.target.value);
  }

  render(){
    return(
      <div>
        <h3>Daftar Makanan Yang Kami Sediakan : </h3>
        <table>
          <tbody>
            <tr>
              <td>
                <ListMakanan ListMakanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
                <center>
                  <button onClick={this.ubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan ListMakanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                <center>
                  <button onClick={this.ubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan ListMakanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                <center>
                  <button onClick={this.ubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan ListMakanan="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
                <center>
                  <button onClick={this.ubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan ListMakanan="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"/>
                <center>
                  <button onClick={this.ubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
        <br/>
        <input type="text" onChange={this.pesanan}></input>
        <h3>Pesanan Anda : {this.state.pesan}</h3>
      </div>
    );
  }
}
export default MenuMakanan;
