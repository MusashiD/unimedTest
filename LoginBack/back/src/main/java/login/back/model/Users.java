package login.back.model;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Id;

import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name="usuarios")
public class Users {

	@Id
   Integer id;
	
	@Column(unique=true)
	String email;
	
	@Column(unique=true)
	String username;
	
	@Column
	String password;
	
	@Column()
	boolean firstacess;
}
