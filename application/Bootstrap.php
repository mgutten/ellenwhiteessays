<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
	protected function _initLayoutSetup()
	{
		$this->bootstrap('layout'); 
		
		$layout = $this->getResource('layout');
		$view   = $this->getResource('view');
		// Set global layout
		$layout->setLayout('global');
	}

}

