using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Pclasses
{
    public partial class FrmMensalista : Form
    {
        public FrmMensalista()
        {
            InitializeComponent();
        }

        private void Label1_Click(object sender, EventArgs e)
        {

        }

        private void RbtnSim_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void GroupBox1_Enter(object sender, EventArgs e)
        {

        }

        private void BtnInstanciar1_Click(object sender, EventArgs e)
        {
            Mensalista objMensalista = new Mensalista();
            objMensalista.Matricula = Convert.ToInt32(txtMatricula.Text);
            objMensalista.NomeEmpregado = txtNome.Text;
            objMensalista.SalarioMensal = Convert.ToDouble(txtSalario.Text);
            objMensalista.DataEntradaEmpresa = Convert.ToDateTime(txtData.Text);
            if (rbtnSim.Checked)
                objMensalista.HomeOffice = 'S';
            else 
                objMensalista.HomeOffice = 'N';
            //get
            MessageBox.Show("Matricula: " + objMensalista.Matricula + "\n" +
   
                "Nome: " + objMensalista.NomeEmpregado + "\n" + "Data Entrada: " +
                objMensalista.DataEntradaEmpresa.ToShortDateString() + "\n" +
                "Salário Bruto: " + objMensalista.SalarioBruto().ToString("N2") +
                 "\n" +
                "Tempo EMpresa (dias): " + objMensalista.TempoTrabalho() + '\n' + objMensalista.VerifcaHome());
        }

        private void TxtData_TextChanged(object sender, EventArgs e)
        {

        }

        private void BtnInstanciar2_Click(object sender, EventArgs e)
        {
            Mensalista Objmensalista = new Mensalista(
                Convert.ToInt32(txtMatricula.Text), txtNome.Text,
                Convert.ToDateTime(txtData.Text),
                Convert.ToDouble(txtSalario.Text));

             MessageBox.Show("Matricula: " + Objmensalista.Matricula + "\n" +
   
                "Nome: " + Objmensalista.NomeEmpregado + "\n" + "Data Entrada: " +
                Objmensalista.DataEntradaEmpresa.ToShortDateString() + "\n" +
                "Salário Bruto: " + Objmensalista.SalarioBruto().ToString("N2") +
                 "\n" +
                "Tempo EMpresa (dias): " + Objmensalista.TempoTrabalho() + '\n' + Objmensalista.VerifcaHome());


            MessageBox.Show(Mensalista.Empresa);
        }
    }
   
}
