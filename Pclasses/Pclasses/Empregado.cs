using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pclasses
{
   abstract class Empregado
    {
        private int matricula; //atributo
        private string nomeEmpregado;
        private DateTime dataEntradaEmpresa;
        private char homeOffice;

        public int Matricula  //propriedade
        {
            get { return matricula; }
            set { matricula = value; }
        }
        public string NomeEmpregado  //propriedade
        {
            get { return nomeEmpregado; }
            set { nomeEmpregado = value; }
        }
        public DateTime DataEntradaEmpresa
        {
            get { return dataEntradaEmpresa; }
            set { dataEntradaEmpresa = value; }
        }
        public Char HomeOffice
        {
            get { return homeOffice; }
            set { homeOffice = value; }
        }
        //metodos
        
        public String VerifcaHome() //metodo
        {
            if (homeOffice == 'S')
                return "Empregado trabalha em home office";
            else
                return "empregado NÃO trabalha em home office";
        }
        public virtual  int TempoTrabalho()
        {
            TimeSpan span = DateTime.Today.Subtract (dataEntradaEmpresa);

            return (span.Days);

        }
        public abstract double SalarioBruto();
    }
}
