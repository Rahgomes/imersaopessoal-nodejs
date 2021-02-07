import Ferramenta from "../models/Ferramenta";

class FerramentaController {
  async index(req, res) {
    try {
      const obterFerramenta = await Ferramenta.findAll();
      return res.json(obterFerramenta);
    } catch (e) {
      return res.status(400).json({ errors: e.parent });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const ferramenta = await Ferramenta.findByPk(id);
      return res.json(ferramenta);
    } catch (e) {
      return res.status(400).json({ errors: e.parent });
    }
  }

  async store(req, res) {
    try {
      const criarFerramenta = await Ferramenta.create(req.body);
      return res.json(criarFerramenta);
    } catch (e) {
      return res.status(400).json({ errors: e.parent });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const ferramenta = await Ferramenta.findByPk(id);
      const ferramentaAtualizada = await ferramenta.update(req.body);
      return res.json(ferramentaAtualizada);
    } catch (e) {
      return res.status(400).json({ errors: e.parent });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const ferramenta = await Ferramenta.findByPk(id);
      ferramenta.destroy();
      return res.json({
        apagado: ferramenta,
      });
    } catch (e) {
      return res.status(400).json({ errors: e.parent });
    }
  }
}

export default new FerramentaController();
