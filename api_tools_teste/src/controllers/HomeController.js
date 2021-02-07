class HomeController {
  async index(req, res) {
    try {
      res.json("Rota HOME");
    } catch (e) {
      res.status(400).json({ errors: e.parent });
    }
  }
}

export default new HomeController();
