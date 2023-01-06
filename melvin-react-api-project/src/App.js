
import React, { Component } from 'react';
import './App.css';
import Spotify from 'spotify-web-api-js';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardImgOverlay } from 'reactstrap';

const spotifyWebApi = new Spotify();

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' },
      artist: '',
      album: '',
      track: '',
      artistData: [],
      albumData: [],
      trackData: [],
      artistId: '',
      albumId: '',
      trackId: '',
      artistImage: '',
      albumImage: '',
      trackImage: '',
      artistName: '',
      albumName: '',
      trackName: '',
      artistGenre: '',
      albumGenre: '',
      trackGenre: '',
      artistPopularity: '',
      albumPopularity: '',
      trackPopularity: '',
      artistFollowers: '',
      albumFollowers: '',
      trackFollowers: '',
      artistUrl: '',
      albumUrl: '',
      trackUrl: '',
      artistAlbums: [],
      albumTracks: [],
      trackAlbum: '',
      trackArtist: '',
      trackDuration: '',
      trackExplicit: '',
      trackPopularity: '',
      trackPreview: '',
      trackUrl: '',
      trackAlbumImage: '',
      trackArtistImage: '',
      trackArtistName: '',
      trackAlbumName: '',
      trackArtistGenre: '',
      trackArtistPopularity: '',
      trackArtistFollowers: ''