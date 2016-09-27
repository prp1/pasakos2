
export default class Home extends Component {  

    isOpened = false;

    toggleSideDrawer() {
        this.isOpened ? this._drawer.close() : this._drawer.open();
        this.isOpened = !this.isOpened;
    }


  render () {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<SideContent />}
        openDrawerOffset={100}
        open={false}
        styles={drawerStyles}
        >
        <MainView 
            toggleSideDrawer={this.toggleSideDrawer.bind(this)}
        />
      </Drawer>
    )
  }
}
